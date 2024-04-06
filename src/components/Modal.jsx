import React, { useState, useRef } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";
import PropTypes from "prop-types";

function CustomModal(props) {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  const emailRef = useRef(null);
  const numberRef = useRef(null);

  const toggle = () => setModal(!modal);

  const handleNext = () => {
    const emailValue = emailRef.current.value.trim();
    const numberValue = numberRef.current.value.trim();

    if (emailValue && numberValue) {
      localStorage.setItem("email", emailValue);
      localStorage.setItem("number", numberValue);
      setModal(false);
    } else {
      alert("Please fill in all fields");
    }
  };

  if (localStorage.getItem("email") && localStorage.getItem("number")) {
    return null;
  }

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button
          className="w-[100px]  flex flex-col  items-center   border-none"
          onClick={toggle}
        >
          <i className=" text-slate-700 text-[30px] fa-regular fa-user"></i>
          <h2 className="text-lg text-slate-800">Войти</h2>
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader
          toggle={toggle}
          className="text-center capitalize font-bold text-[22px]"
        >
          auth modal
        </ModalHeader>
        <ModalBody>
          <input
            ref={emailRef}
            type="email"
            className="capitalize w-full mb-4 h-[40px] pl-2 outline-none rounded border-2 border-[#999]"
            placeholder="enter your email"
            required
          />
          <input
            ref={numberRef}
            type="number"
            className="capitalize w-full h-[40px] pl-2 outline-none rounded border-2 border-[#999]"
            placeholder="enter your number"
            required
          />
        </ModalBody>
        <ModalFooter>
          <Button color="green" onClick={toggle}>
            cancel
          </Button>{" "}
          <Button color="red" onClick={handleNext}>
            next
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

CustomModal.propTypes = {
  className: PropTypes.string,
};

export default CustomModal;
