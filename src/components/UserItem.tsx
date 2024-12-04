import Image from 'next/image';

interface UserItemProps {
  avatar: string;
  username: string;
  value: string;
  currency: string;
  description: string;
}

const UserItem = ({
  avatar,
  currency,
  description,
  username,
  value,
}: UserItemProps) => {
  return (
    <div className="flex items-center gap-6 rounded-xl bg-black px-6 py-4">
      <div className="relative size-10 overflow-hidden rounded-full">
        <Image src={avatar} alt="" sizes="auto" fill />
      </div>
      <div className="flex flex-1 flex-col gap-[2px]">
        <div className="flex justify-between font-bold">
          <p className="text-lg">{username}</p>
          <p className="text-lg">{currency}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-muted-foreground">{value}</p>
          <p className="font-semibold text-[#348b16]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
