import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../schema/formSchema";
import { resetValues, testValues } from "../schema/addresetvValues";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  pronounce: string;
  accountType: string;
  notifications: boolean;
  acceptTerms: boolean;
};

const useFormLogic = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(resetValues);
      setIsSubmitted(true);

      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitSuccessful, reset]);

  return {
    register,
    handleSubmit,
    errors,
    isSubmitted,
    onSubmit,
    resetForm: () => reset(resetValues),
    addValues: () => reset(testValues),
  };
};

export default useFormLogic;