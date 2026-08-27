export function formatPrice(prixAr: number): string {
  return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(prixAr) + ' Ar'
}