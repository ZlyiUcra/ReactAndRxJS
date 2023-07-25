import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { closeModalSubject, showModalSubject } from "./utils/modalSubject";

function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = (flag: boolean) => {
    setModalVisible(flag);
  };

  useEffect(() => {
    showModalSubject.subscribe(() => {
      showModal(true);
    });

    closeModalSubject.subscribe(() => {
      showModal(false);
    });

    return () => {
      // Clean up the subscriptions to avoid memory leaks
      showModalSubject.unsubscribe();
      closeModalSubject.unsubscribe();
    };
  }, []);

  return (
    <>
      <button onClick={() => showModalSubject.next(true)}>Show Modal</button>
      <Modal show={isModalVisible} />
    </>
  );
}

export default App;
