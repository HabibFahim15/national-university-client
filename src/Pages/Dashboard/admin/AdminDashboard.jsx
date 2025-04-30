import Overview from "../../../components/adminDashboard/Overview";
import Header from "../../../components/adminDashboard/Header";

const AdminDashboard = () => {
  return (
    <section>
      <div className="my-4 md:my-8">
        <Header />
      </div>
      <div>
        <Overview />
      </div>

      <div>
          
      </div>
    </section>
  );
};

export default AdminDashboard;
