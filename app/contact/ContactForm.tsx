"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full px-4 py-3 rounded-[6px] border border-rule text-[15px] text-ink placeholder:text-ink-mute focus:outline-none focus:border-tag-blue-deep transition-colors bg-white";

const labelClass = "block text-[12px] uppercase tracking-[0.1em] text-ink-mute mb-1.5";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem("first_name") as HTMLInputElement).value,
      last_name: (form.elements.namedItem("last_name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      lead_source: "Website",
      property_street: (form.elements.namedItem("property_street") as HTMLInputElement).value,
      property_city: (form.elements.namedItem("property_city") as HTMLInputElement).value,
      property_state: (form.elements.namedItem("property_state") as HTMLInputElement).value,
      property_zip: (form.elements.namedItem("property_zip") as HTMLInputElement).value,
    };

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/11767374/4oapmvq/", {
        method: "POST",
        body: JSON.stringify(data),
      });
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please call us directly or try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* First + Last name row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className={labelClass}>First Name</label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            maxLength={40}
            required
            placeholder="Jane"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClass}>Last Name</label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            maxLength={80}
            required
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={40}
          required
          placeholder="(405) 555-0100"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={80}
          placeholder="jane@email.com"
          className={inputClass}
        />
      </div>

      {/* Property street */}
      <div>
        <label htmlFor="property_street" className={labelClass}>Property Street Address</label>
        <input
          id="property_street"
          name="property_street"
          type="text"
          maxLength={255}
          required
          placeholder="123 Main St"
          className={inputClass}
        />
      </div>

      {/* City / State / Zip */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <label htmlFor="property_city" className={labelClass}>City</label>
          <input
            id="property_city"
            name="property_city"
            type="text"
            maxLength={200}
            required
            placeholder="Edmond"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="property_state" className={labelClass}>State</label>
          <input
            id="property_state"
            name="property_state"
            type="text"
            maxLength={200}
            defaultValue="OK"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="property_zip" className={labelClass}>Zip</label>
          <input
            id="property_zip"
            name="property_zip"
            type="text"
            maxLength={200}
            placeholder="73034"
            className={inputClass}
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-[13px] text-red-500">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full px-6 py-4 rounded-full bg-tag-blue text-white text-[14px] font-medium tracking-[0.02em] hover:bg-tag-blue-deep transition-all hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "sending..." : "get your offer"}
      </button>

      <p className="text-[12px] text-ink-mute text-center">
        No obligation. We&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
