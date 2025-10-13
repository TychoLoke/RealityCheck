interface FormErrorProps {
  message?: string;
}

export function FormError({ message = "Something went wrong—please try again, or email hello@channelos.org" }: FormErrorProps) {
  return (
    <p className="rounded-2xl border border-errorRed/20 bg-errorRed/5 px-4 py-3 text-sm text-errorRed">
      {message}
    </p>
  );
}
