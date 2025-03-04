export function getStatusMatchStyle(status: string): string {
  switch (status) {
    case "Live":
      return "bg-green-600 text-white";
    case "Finished":
      return "bg-red-500 text-white";
    case "Scheduled":
      return "bg-gray-500 text-white";
    default:
      return "bg-gray-700 text-white";
  }
}
