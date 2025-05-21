const mockUserRoles = ['admin', 'editor'] // Replace with actual auth logic

export function usePermission() {
  const hasPermission = (role: string) => mockUserRoles.includes(role)
  return { hasPermission }
}