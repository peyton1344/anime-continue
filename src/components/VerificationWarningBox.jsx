export default function VerificationWarningBox({ title = "Verification warning", children }) {
  return (
    <div className="warning-scroll rounded-2xl p-5 text-amber-50">
      <h2 className="text-lg font-black">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-amber-100/90">{children}</p>
    </div>
  );
}
