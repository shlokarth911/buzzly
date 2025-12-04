import StylistLoginForm from "../../../features/auth/components/StylistLoginForm";

const StylistLogin = () => {
  return (
    <>
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <StylistLoginForm />
        </div>
      </div>
    </>
  );
};

export default StylistLogin;
