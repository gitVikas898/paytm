import Search from "../components/Search";
import Card from "../components/Card";
import User from "../components/User";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import Payment from "../components/Payment";
import axios from "axios";
import { useSelector } from "react-redux";
import GradientHeading from '../components/GradientHeading'
import UserCard from "../components/UserCard";


const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery,setSearchQuery] = useState("");
  const [contacts, setContacts] = useState([]);
  const [activePopupUser, setActivePopupUser] = useState(null);
  const user = useSelector((store) => store?.user?.user);
  const token = useSelector((store) => store?.user?.token);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/bulk"
        );
        setContacts(
          response.data?.user?.filter((users) => users.id !== user?.id)
        );
      } catch (error) {
        console.log(error);
      }
    };
    
    getContacts();
  }, [user?.id]); 


  const filteredContacts = contacts.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-10 md:p-20 min-h-screen">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <UserCard name={user.name} email={user.email} isOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
      <GradientHeading label={"Contacts"}/>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((user) => {
          return (
            <>
              <Card key={user.id}>
                <User
                  field1={user.firstName}
                  isPopupOpen={activePopupUser === user.id}
                  setIsPopupOpen={()=>setActivePopupUser(user.id)}
                />
                <Popup
                  isOpen={activePopupUser === user.id}
                  onClose={() => setActivePopupUser(null)}
                >
                  <Payment isOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} token={token} to={user.id} setActivePopupUser={setActivePopupUser} />
                </Popup>
              </Card>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Dashboard;
