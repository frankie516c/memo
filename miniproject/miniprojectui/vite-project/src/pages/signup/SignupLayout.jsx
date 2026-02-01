function SignupLayout() {
  const [step, setStep] = useState(1);

  return (
    <div className="login-wrapper">
      {step === 1 && <Step1Type onNext={() => setStep(2)} />}
      {step === 2 && <Step2Terms onNext={() => setStep(3)} />}
      {step === 3 && <Step3Auth onNext={() => setStep(4)} />}
      {step === 4 && <Step4Form />}
    </div>
  );
}
