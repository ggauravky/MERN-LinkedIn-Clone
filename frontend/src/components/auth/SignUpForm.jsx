import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios.js";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();

  const { mutate: signUpMutation, isPending } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/auth/signup", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (err) => {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to create account. Please check your connection.";
      toast.error(errorMessage);
    },
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpMutation({ name, username, email, password });
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full bg-white text-[#000000] placeholder:text-[#666666] border-[#666666] focus:border-[#0a66c2] focus:outline-[#0a66c2]"
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input input-bordered w-full bg-white text-[#000000] placeholder:text-[#666666] border-[#666666] focus:border-[#0a66c2] focus:outline-[#0a66c2]"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered w-full bg-white text-[#000000] placeholder:text-[#666666] border-[#666666] focus:border-[#0a66c2] focus:outline-[#0a66c2]"
        required
      />
      <input
        type="password"
        placeholder="Password (6+ characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered w-full bg-white text-[#000000] placeholder:text-[#666666] border-[#666666] focus:border-[#0a66c2] focus:outline-[#0a66c2]"
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="btn w-full bg-[#0a66c2] hover:bg-[#004182] border-[#0a66c2] hover:border-[#004182] text-white"
      >
        {isPending ? (
          <Loader className="size-5 animate-spin" />
        ) : (
          "Agree & Join"
        )}
      </button>
    </form>
  );
};
export default SignUpForm;
