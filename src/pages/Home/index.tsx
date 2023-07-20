import { PencilLine, Trash } from "phosphor-react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { IContact, edit, remove } from "../../store/reducers/contacts";
import { useState } from "react";
import { PhoneInput } from "../../styles/global";

export const Home = () => {
  const contacts = useSelector((state: RootReducer) => state.contact);
  const dispatch = useDispatch();

  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  const handleEditContact = (contact: IContact) => {
    dispatch(edit(contact));

    if (contact.isEditing) {
      if (
        editedEmail.trim().length > 0 &&
        editedName.trim() &&
        editedPhone.trim()
      ) {
        const updatedContact = {
          id: contact.id,
          name: editedName,
          email: editedEmail,
          phone: editedPhone,
        };
        dispatch(edit(updatedContact));
      } else {
        alert("Preencha todos os campos.");
      }
    }
  };

  return (
    <>
      <S.Title>Meus contatos</S.Title>

      <S.Table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  {contact.isEditing ? (
                    <S.Input
                      type="text"
                      onChange={(e) => setEditedName(e.target.value)}
                      disabled={!contact.isEditing}
                      placeholder={contact.name}
                      required
                    />
                  ) : (
                    <p>{contact.name}</p>
                  )}
                </td>
                <td>
                  {contact.isEditing ? (
                    <S.Input
                      type="email"
                      placeholder={contact.email}
                      onChange={(e) => setEditedEmail(e.target.value)}
                      disabled={!contact.isEditing}
                      required
                    />
                  ) : (
                    <p>{contact.email}</p>
                  )}
                </td>
                <td>
                  {contact.isEditing ? (
                    <PhoneInput
                      type="text"
                      mask="(99) 99999-9999"
                      placeholder={contact.phone}
                      onChange={(e) => setEditedPhone(e.target.value)}
                      disabled={!contact.isEditing}
                      required
                    />
                  ) : (
                    <p>{contact.phone}</p>
                  )}
                </td>
                <td>
                  <S.DeleteButton
                    title="Excluir contato"
                    onClick={() => dispatch(remove(contact.id!))}
                  >
                    <Trash size={24} />
                  </S.DeleteButton>
                  <S.SaveButton
                    title="Editar contato"
                    type="submit"
                    onClick={() => handleEditContact(contact)}
                  >
                    <PencilLine size={24} />
                  </S.SaveButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </S.Table>

      <S.LinkBtn to="new-contact">Adicionar novo contato</S.LinkBtn>
    </>
  );
};
