import DoTerraAssociateApp from "@/components/DoTerraAssociateApp";
import ProtectedRoute from "@/components/ProtectedRoute";
import MembershipGate from "@/components/MembershipGate";

export default function AssociateApp() {
  return (
    <ProtectedRoute>
      <MembershipGate>
        <DoTerraAssociateApp />
      </MembershipGate>
    </ProtectedRoute>
  );
}