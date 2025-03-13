import Search from "../components/Search";
import Card from "../components/Card";
import User from "../components/User";
import { useCallback, useEffect, useState } from "react";
import Popup from "../components/Popup";
import Payment from "../components/Payment";
import axios from "axios";
import { useSelector } from "react-redux";
import GradientHeading from '../components/GradientHeading'
import UserCard from "../components/UserCard";


const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchQuery,setSearchQuery] = useState("");
  const [balance, setBalance] = useState(null);
  const [contacts, setContacts] = useState([]);
  const user = useSelector((store) => store?.user?.user);
  const token = useSelector((store) => store?.user?.token);
  const [activePopupUser, setActivePopupUser] = useState(null);

  const getBalance = useCallback(async () => {
    if (!user?.id || !token) return; // Prevent API call if user/token is missing
    console.log("User ID:", user?.id);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            userId: user?.id,
          },
        }
      );
      // Directly log response balance
      console.log("Fetched Balance:", response.data?.balance);
      setBalance(response.data?.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }, [user?.id, token]); 

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
    getBalance();
  }, [user?.id,getBalance]); 


  const filteredContacts = contacts.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-10 md:p-20 min-h-screen">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <UserCard name={user.name} email={user.email} balance={balance?.toFixed(2) } getBalance={getBalance}/>
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
                  <Payment isOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} token={token} to={user.id} />
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
