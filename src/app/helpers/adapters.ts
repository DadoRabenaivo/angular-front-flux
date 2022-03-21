export function MapRoute(department?: string) {
    if (department) return department.toLowerCase();
    return '';
}