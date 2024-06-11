import React from "react";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <section className="flex items-center gap-2 border-bottom border-b-2 pb-2">
      <img src="contact.png" className="rounded-full w-20 h-20" />
      <span className="text-primary-800 text-xl font-bold">fateme</span>
      <span className="w-4 h-4 bg-info-800 rounded-full animate-ping"></span>
    </section>
  );
};

export default Profile;
