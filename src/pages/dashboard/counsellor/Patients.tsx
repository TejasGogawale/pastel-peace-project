import DashboardLayout from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import PatientList from "@/components/dashboard/PatientList";
import PatientMoodDashboard from "@/components/dashboard/PatientMoodDashboard";
import CounsellorGroups from "@/components/dashboard/CounsellorGroups";
import { Users } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Patients = () => {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);

  if (selectedPatient) {
    return (
      <DashboardLayout role="counsellor">
        <div className="p-8 gradient-calm min-h-screen">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-7xl mx-auto"
          >
            <PatientMoodDashboard patientId={selectedPatient} onBack={() => setSelectedPatient(null)} />
          </motion.div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="counsellor">
      <div className="p-8 gradient-calm min-h-screen">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Users className="w-10 h-10 text-primary" />
              Patient Management
            </h1>
            <p className="text-muted-foreground text-lg">Monitor and support your patients</p>
          </div>

          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="list">Patient List</TabsTrigger>
              <TabsTrigger value="groups">Managed Groups</TabsTrigger>
            </TabsList>

            <TabsContent value="list" className="space-y-6">
              <PatientList onSelectPatient={setSelectedPatient} />
            </TabsContent>

            <TabsContent value="groups" className="space-y-6">
              <CounsellorGroups />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Patients;
