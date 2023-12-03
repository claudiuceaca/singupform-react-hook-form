import React from "react";
import useFormLogic from "../hooks/useFormLogicHook";
import Buttons from "./buttons/Buttons";
import Checkbox from "./checkbox/Checkbox";
import Input from "./input/Input";
import MiniContainer from "./miniContainer/MiniContainer";
import RadioGroup from "./radiogroup/RadioGroup";
import Select from "./select/Select";
import Slider from "./slider/slider";
import Submitted from "./submitted/Submitted";

const FormContainer: React.FC = () => {
    const {
        register,
        handleSubmit,
        errors,
        isSubmitted,
        onSubmit,
        resetForm,
        addValues,
    } = useFormLogic();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <MiniContainer>
                <Input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    message={errors.firstName?.message?.toString()}
                    formObject={register("firstName")}
                />
                <Input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    message={errors.lastName?.message?.toString()}
                    formObject={register("lastName")}
                />
            </MiniContainer>

            <Input
                type="email"
                id="email"
                placeholder="Email"
                message={errors.email?.message?.toString()}
                formObject={register("email")}
            />

            <MiniContainer>
                <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    message={errors.password?.message?.toString()}
                    formObject={register("password")}
                />
                <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    message={errors.confirmPassword && "Passwords Should Match!"}
                    formObject={register("confirmPassword")}
                />
            </MiniContainer>

            <Select formObject={register("pronounce")} />
            <RadioGroup formObject={register("accountType")} />

            <MiniContainer>
                <Slider formObject={register("notifications")} />
                <Checkbox
                    formObject={register("acceptTerms")}
                    error={errors.acceptTerms?.message}
                />
            </MiniContainer>

            <Buttons resetForm={resetForm} addValues={addValues} />

            {isSubmitted && <Submitted />}
        </form>
    );
};

export default FormContainer;