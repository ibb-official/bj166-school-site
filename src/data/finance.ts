import data from './finance-data.json';

// Amounts stay as disclosed decimal strings. Do not replace exact values with display rounding.
// The JSON contains annual school data and official URLs only, not local review files or contracts.
export const financeCheckedAt = '2026-11-14';
export const financeUnit = '万元';
export const financeEntity = '北京市第一六六中学';
export const financeBudgetUnit = '064020';
export const financePortal = 'https://www.bjdch.gov.cn/ztzl/bmyjsgkzl/index.html';
export const financeBudgets = data.budgets;
export const financeFinals = data.finals;
export const financeSources = data.sources;
export const financeNotes = data.notes;

const amountFormat = new Intl.NumberFormat('zh-CN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export function formatFinanceAmount(value: string): string {
  return amountFormat.format(Number(value));
}

export function financePdfUrl(sourceId: string, physicalPage?: number): string {
  const source = financeSources.find((item) => item.id === sourceId);
  if (!source) throw new Error(`Unknown finance source: ${sourceId}`);
  if (physicalPage !== undefined && (!Number.isInteger(physicalPage) || physicalPage < 1 || physicalPage > source.pages)) {
    throw new Error(`Invalid physical page for ${sourceId}: ${physicalPage}`);
  }
  return source.pdfUrl + (physicalPage === undefined ? '' : `#page=${physicalPage}`);
}

export const latestFinanceBudget = financeBudgets[financeBudgets.length - 1];
export const latestFinanceFinal = financeFinals[financeFinals.length - 1];
