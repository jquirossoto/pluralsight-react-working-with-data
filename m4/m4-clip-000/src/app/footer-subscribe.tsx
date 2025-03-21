import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const FooterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const isValidEmail = email.match(/\S+@\S+\.\S+/);
    setIsButtonDisabled(!isValidEmail);
  }, [email]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/attendees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: "",
          lastName: "",
          createdDate: new Date(),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Subscription updated successfully");
        setEmail("");
      } else alert("Failed to update subscription. Try again later");
    } catch (error) {
      console.log("Error in fetch", error);
      alert("Error ocurred. Try again later");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <h5 className="text-uppercase mb-4">Stay Updated</h5>
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            required
          ></input>
          <button
            type="submit"
            className="btn btn-outline-dark"
            disabled={isButtonDisabled || isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </form>
    </>
  );
};
