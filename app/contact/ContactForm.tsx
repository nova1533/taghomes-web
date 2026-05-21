"use client";

const inputClass =
  "w-full px-4 py-3 rounded-[6px] border border-rule text-[15px] text-ink placeholder:text-ink-mute focus:outline-none focus:border-tag-blue-deep transition-colors bg-white";

const labelClass = "block text-[12px] uppercase tracking-[0.1em] text-ink-mute mb-1.5";

export default function ContactForm() {
  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8c000000eP47"
      method="POST"
      className="flex flex-col gap-5"
    >
      {/* Hidden Salesforce fields */}
      <input type="hidden" name="oid" value="00D8c000000eP47" />
      <input type="hidden" name="retURL" value="https://taghomes-web.vercel.app/thank-you" />
      <input type="hidden" name="debug" value="1" />
      <input type="hidden" name="debugEmail" value="boz@taghomes.co" />

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

      {/* Property address */}
      <div>
        <label htmlFor="street" className={labelClass}>Property Street Address</label>
        <input
          id="street"
          name="street"
          type="text"
          maxLength={255}
          required
          placeholder="123 Main St"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <label htmlFor="city" className={labelClass}>City</label>
          <input
            id="city"
            name="city"
            type="text"
            maxLength={40}
            required
            placeholder="Edmond"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="state" className={labelClass}>State</label>
          <input
            id="state"
            name="state"
            type="text"
            maxLength={20}
            defaultValue="OK"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="zip" className={labelClass}>Zip</label>
          <input
            id="zip"
            name="zip"
            type="text"
            maxLength={20}
            placeholder="73034"
            className={inputClass}
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 w-full px-6 py-4 rounded-full bg-tag-blue text-white text-[14px] font-medium tracking-[0.02em] hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
      >
        get your offer
      </button>

      <p className="text-[12px] text-ink-mute text-center">
        No obligation. We&apos;ll be in touch within 24 hours.
      </p>
    </form>
  );
}
