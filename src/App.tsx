import { useState } from 'react';
import Modal from 'react-modal';

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewTransactionModal from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobaStyle } from "./styles/global"; 

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobaStyle />
    </TransactionsProvider>
  );
}

export default App;
