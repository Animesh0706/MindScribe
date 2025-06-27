import FloatingButton from './FloatingButton';
import JournalList from './JournalList';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <FloatingButton />
      <JournalList />
    </>
  );
}