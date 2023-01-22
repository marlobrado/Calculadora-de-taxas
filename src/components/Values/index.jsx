import { useContext } from "react";
import { CalcContext } from "../../contexts/CalcContext";
import { ContainerValues } from "./styles";

const Values = () => {
    const { recivedValues } = useContext(CalcContext);
    // console.log(recivedValues[1])
    return (
        <ContainerValues>
            <div className="recivedValues">
                <h3>Você receberá:</h3>
            </div>
            <div className="recivedValues">
                <p>
                    {`Amanhã: `}{" "}
                    {recivedValues ? (
                        <b>{`R$${recivedValues[1]},00`} </b>
                    ) : (
                        <b>R$0,00</b>
                    )}
                </p>
            </div>

            <div className="recivedValues">
                <p>
                    {`Em 15 dias: `}{" "}
                    {recivedValues ? (
                        <b>{`R$${recivedValues[15]},00`} </b>
                    ) : (
                        <b>R$0,00</b>
                    )}
                </p>
            </div>

            <div className="recivedValues">
                <p>
                    {`Em 30 dias: `}{" "}
                    {recivedValues ? (
                        <b>{`R$${recivedValues[30]},00`} </b>
                    ) : (
                        <b>R$0,00</b>
                    )}
                </p>
            </div>

            <div className="recivedValues">
                <p>
                    {`Em 90 dias: `}{" "}
                    {recivedValues ? (
                        <b>{`R$${recivedValues[90]},00`} </b>
                    ) : (
                        <b>R$0,00</b>
                    )}
                </p>
            </div>
        </ContainerValues>
    );
};

export default Values;
