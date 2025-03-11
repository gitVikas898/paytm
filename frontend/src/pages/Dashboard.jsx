import Search from "../components/Search";
import Card from "../components/Card";
import User from "../components/User";
import { useEffect, useState } from "react";
import Popup from "../components/Popup";
import Payment from "../components/Payment";
import axios from "axios";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [balance, setBalance] = useState(null);
  const [contacts, setContacts] = useState([]);
  const user = useSelector((store) => store?.user?.user);
  const token = useSelector((store) => store?.user?.token);

  useEffect(() => {
    const getBalance = async () => {
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
    };

    const getContacts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/bulk"
        );
        setContacts(response.data?.user.filter((users)=>users.id !== user.id));
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
    getBalance();
  }, [user, token]); // Runs only when `user` or `token` changes
  return (
    <section>
      <Search />
      <div className="grid gap-2 p-4">
        {contacts.map((user) => {
          return (
            <Card key={user.id}>
              <User
                field1={user.firstName}
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
              />
            </Card>
          );
        })}
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(!isPopupOpen)}>
        <Payment balance={balance} />
      </Popup>
    </section>
  );
};

export default Dashboard;
