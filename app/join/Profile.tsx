type ProfileProps = {
  onBack: () => void;
};

const Profile = ({ onBack }: ProfileProps) => {
  return (
    <div>
      <button type="button" onClick={onBack}>
        Back
      </button>
    </div>
  );
};

export default Profile;
