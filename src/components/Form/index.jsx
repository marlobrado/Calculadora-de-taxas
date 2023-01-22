import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/calcSchema";
import { useContext } from "react";
import { CalcContext } from "../../contexts/CalcContext";
import { ContainerForm } from "./styles";

const Form = () => {
    const { onHandleChange } = useContext(CalcContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: false,
    });

    return (
        <ContainerForm>
            <h2>Simule sua Antecipação</h2>
            <form onChange={handleSubmit(onHandleChange)}>
                <label htmlFor="amount">Informe o valor da venda *</label>
                <input
                    // type="number"
                    placeholder="R$1000"
                    id="amount"
                    {...register("amount")}
                />
                <span>{errors.amount?.message}</span>
                {/* {errors.amount && <span>{errors.amount.message}</span>} */}

                <label htmlFor="installments">Em quantas parcelas *</label>
                <input
                    placeholder="12"
                    id="installments"
                    {...register("installments")}
                />
                {errors.installments && (
                    <span>{errors.installments.message}</span>
                )}

                <label htmlFor="mdr">Informe o percentual de MDR *</label>
                <input placeholder="%" id="mdr" {...register("mdr")} />
                {errors.mdr && <span>{errors.mdr.message}</span>}
            </form>
        </ContainerForm>
    );
};

export default Form;
