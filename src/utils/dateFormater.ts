export const dateFormatter = (ISODate: string) => {
    const fecha = new Date(ISODate);
    return fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };