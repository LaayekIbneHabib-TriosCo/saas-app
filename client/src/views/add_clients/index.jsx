// root
import axios from "axios";
import { useState, useReducer, useRef, useEffect } from "react";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";

// components
import Header from "../../components/header";
import CustomTable from "../../components/table";
import CustomModal from "../../components/modal";

const initialState = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  error: "",
  clients: [],
};

// reducer function that handles state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_INDUSTRY":
      return { ...state, industry: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "ADD_CLIENT":
      return {
        ...state,
        clients: [...state.clients, action.payload],
        name: "",
        email: "",
        phone: "",
        industry: "",
        error: "",
      };
    default:
      return state;
  }
};

export default function AddClients() {
  const [clients, setClients] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, dispatch] = useReducer(reducer, initialState);

  const toast = useToast();
  const finalRef = useRef(null);
  const initialRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!state.name || !state.email || !state.phone || !state.industry) {
      dispatch({ type: "SET_ERROR", payload: "Please fill in all fields" });
    } else {
      const newClient = {
        name: state.name,
        email: state.email,
        phone: state.phone,
        industry: state.industry,
      };
      toast({
        title: "Client added",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch({ type: "ADD_CLIENT", payload: newClient });
    }

    // add client
    axios
      .post("http://localhost:8000/api/clients", state)
      .then((res) => {
        if (res.data == "OK") {
          fetchData();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // get clients
  async function fetchData() {
    try {
      const res = await fetch("http://localhost:8000/api/data");
      if (!res.ok) {
        throw new Error(res.status);
      } else {
        const data = await res.json();
        setClients(data);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" gap="1rem" margin="1rem">
        <Box>
          <Header />
        </Box>
        <Box>
          <CustomModal
            initialRef={initialRef}
            finalRef={finalRef}
            isOpen={isOpen}
            onSubmit={onSubmit}
            state={state}
            dispatch={dispatch}
            onClose={onClose}
          />
          <CustomTable onOpen={onOpen} clients={clients} />
        </Box>
      </Box>
    </>
  );
}
