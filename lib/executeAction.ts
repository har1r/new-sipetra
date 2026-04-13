type ExecuteActionProps<T> = {
  actionFn: () => Promise<T>;
  successMessage?: string;
};

export async function executeAction<T>({
  actionFn,
  successMessage,
}: ExecuteActionProps<T>) {
  try {
    const data = await actionFn();

    return {
      success: true,
      data,
      message: successMessage || "Operation successful",
    };
  } catch (error: any) {
    console.error("Action Error:", error);

    // Menangani error dari Zod (Validasi)
    if (error.name === "ZodError") {
      return {
        success: false,
        error: "Data yang dikirim tidak valid",
      };
    }

    // Menangani error umum
    return {
      success: false,
      error: error.message || "Terjadi kesalahan internal server",
    };
  }
}
