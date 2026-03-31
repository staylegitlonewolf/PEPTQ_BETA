import { GOOGLE_SCRIPT_URL } from './api';

const requiredFields = ['name', 'institution', 'email', 'phone', 'intent'];
const GAS_SIMPLE_CONTENT_TYPE = 'text/plain;charset=utf-8';

const sendGasBeacon = (url, payload) => {
  if (typeof navigator === 'undefined' || typeof navigator.sendBeacon !== 'function') {
    return false;
  }

  try {
    const blob = new Blob([JSON.stringify(payload)], { type: GAS_SIMPLE_CONTENT_TYPE });
    return navigator.sendBeacon(url, blob);
  } catch {
    return false;
  }
};

const normalizeText = (value) => (typeof value === 'string' ? value.trim() : '');

const formatNumeric = (value, digits = 3) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return '';
  return Number(numeric.toFixed(digits)).toString();
};

const formatCalculatorSummary = (calculator) => {
  if (!calculator || typeof calculator !== 'object') return '';

  const parts = [];

  const targetConcentration = formatNumeric(calculator.targetConcentrationMgPerMl, 3);
  if (targetConcentration) parts.push(`Target ${targetConcentration} mg/mL`);

  const plannedDose = formatNumeric(calculator.plannedDoseMg, 3);
  if (plannedDose) parts.push(`Dose ${plannedDose} mg`);

  const diluentVolume = formatNumeric(calculator.diluentVolumeMl, 3);
  if (diluentVolume) parts.push(`Diluent ${diluentVolume} mL`);

  const drawVolume = formatNumeric(calculator.drawVolumeMl, 3);
  if (drawVolume) parts.push(`Draw ${drawVolume} mL`);

  const millimolar = formatNumeric(calculator.approximateMillimolar, 3);
  if (millimolar) parts.push(`Approx ${millimolar} mM`);

  return parts.join('; ');
};

const formatManifestLine = (item) => {
  const name = normalizeText(item?.name);
  if (!name) return '';

  const strength = normalizeText(item?.strength);
  const calculatorSummary = formatCalculatorSummary(item?.calculator);
  const base = strength ? `${name} (${strength})` : name;

  return calculatorSummary ? `${base} [${calculatorSummary}]` : base;
};

export const buildSubmissionPayload = ({ formData, manifestItems = [], toAbsoluteImageUrl }) => {
  const productInterest = manifestItems
    .map((item) => formatManifestLine(item))
    .filter(Boolean)
    .join(' | ');

  const manifestCalculations = manifestItems
    .map((item) => {
      const name = normalizeText(item?.name);
      const calculatorSummary = formatCalculatorSummary(item?.calculator);
      if (!name || !calculatorSummary) return '';
      return `${name}: ${calculatorSummary}`;
    })
    .filter(Boolean)
    .join(' | ');

  const productImages = manifestItems
    .map((item) => toAbsoluteImageUrl?.(item?.image) ?? '')
    .map((url) => normalizeText(url))
    .filter(Boolean);

  return {
    name: normalizeText(formData?.contactName),
    institution: normalizeText(formData?.companyName),
    email: normalizeText(formData?.email),
    phone: normalizeText(formData?.phone),
    intent: normalizeText(formData?.researchArea),
    message: normalizeText(formData?.message),
    productInterest,
    manifestCalculations,
    productImages,
    preferredContact: normalizeText(formData?.preferredContact) || 'Email',
    agreed: Boolean(formData?.agreed),
  };
};

export const isPayloadSubmittable = (payload) => {
  if (!payload?.agreed) return false;
  return requiredFields.every((field) => normalizeText(payload?.[field]).length > 0);
};

export const submitResearchInquiry = async (payload) => {
  if (!isPayloadSubmittable(payload)) {
    throw new Error('Submission blocked: required fields are missing.');
  }

  const queuedViaBeacon = sendGasBeacon(GOOGLE_SCRIPT_URL, payload);
  if (queuedViaBeacon) {
    return;
  }

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: {
      'Content-Type': GAS_SIMPLE_CONTENT_TYPE,
    },
    body: JSON.stringify(payload),
  });
};
