import { createContext, useContext, useState, useCallback } from "react";

type ToastType = "success" | "danger" | "info";
type Toast = { id: number; type: ToastType; message: string };

const ToastCtx = createContext<{
  addToast: (t: ToastType, m: string) => void;
} | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((t) => t.id !== id)),
      2500
    );
  }, []);

  const color = (type: ToastType) =>
    type === "success"
      ? "bg-green-600"
      : type === "danger"
      ? "bg-red-600"
      : "bg-sky-600";
  const icon = (type: ToastType) =>
    type === "success" ? "🚗" : type === "danger" ? "💔" : "ℹ️";

  return (
    <ToastCtx.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`text-white ${color(
              t.type
            )} rounded-xl shadow-lg px-4 py-3 min-w-[220px] animate-[slideIn_.2s_ease-out]`}
          >
            <span className="mr-2">{icon(t.type)}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes slideIn{from{opacity:.2;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
