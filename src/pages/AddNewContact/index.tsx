import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { IContact, add } from "../../store/reducers/contacts";
import { PhoneInput } from "../../styles/global";

export const AddNewContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddNewContact = (e: FormEvent) => {
    e.preventDefault();

    const newContact: IContact = {
      name,
      email,
      phone,
      isEditing: false,
    };

    dispatch(add(newContact));

    setEmail("");
    setName("");
    setPhone("");

    navigate("/");
  };

  return (
    <S.Container>
      <S.Title>Cadastro de novo contato</S.Title>

      <S.Form onSubmit={handleAddNewContact}>
        <S.InputContainer>
          <S.Label htmlFor="name">Nome: </S.Label>
          <S.Input
            type="text"
            placeholder="João Silva"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.Label htmlFor="email">E-mail: </S.Label>
          <S.Input
            type="email"
            placeholder="teste123@mail.com"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.Label htmlFor="phone">Número: </S.Label>
          <PhoneInput
            name="phone"
            id="phone"
            type="text"
            placeholder="(11) 91234-5678"
            mask="(99) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </S.InputContainer>

        <div>
          <S.Button type="submit">Salvar</S.Button>
          <S.Button onClick={() => navigate("/")}>Cancelar</S.Button>
        </div>
      </S.Form>
    </S.Container>
  );
};
