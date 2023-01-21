import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validators/calcSchema";


const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: false,
    });

    const handleChange = (data) => {
        console.log(data);
    };
    return (
        <form onChange={handleSubmit(handleChange)}>
            <label htmlFor="amount">Informe o valor da venda *</label>
            <input
                type="number"
                placeholder="R$1000"
                id="amount"
                {...register("amount")}
            />
            {/* <p>{errors.amount?.message}</p> */}
            {errors.amount && <span>{errors.amount.message}</span>}

            <label htmlFor="installments">Em quantas parcelas *</label>
            <input
                placeholder="12"
                id="installments"
                {...register("installments")}
            />
            {errors.installments && <span>{errors.installments.message}</span>}

            <label htmlFor="mdr">Informe o percentual de MDR *</label>
            <input placeholder="%" id="mdr" {...register("mdr")} />
            {errors.mdr && <span>{errors.mdr.message}</span>}
        </form>
    );
};

export default Form;
