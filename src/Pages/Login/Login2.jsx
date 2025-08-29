import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    topic: "",
    message: "",
    agree: false,
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const maxMsg = 300;

  const errors = validate(form);
  const isValid = Object.keys(errors).length === 0;

  function validate(values) {
    const errs = {};
    if (!values.name.trim()) errs.name = "নাম লিখুন";

    if (!values.email) {
      errs.email = "ইমেইল লিখুন";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
      errs.email = "সঠিক ইমেইল দিন";
    }

    if (!values.password) {
      errs.password = "পাসওয়ার্ড দিন";
    } else if (values.password.length < 6) {
      errs.password = "কমপক্ষে ৬ অক্ষর";
    }

    if (!values.topic) errs.topic = "একটি বিষয় নির্বাচন করুন";

    if (!values.message.trim()) {
      errs.message = "বার্তা লিখুন";
    } else if (values.message.length > maxMsg) {
      errs.message = `সর্বোচ্চ ${maxMsg} অক্ষর`;
    }

    if (!values.agree) errs.agree = "শর্তে সম্মতি প্রয়োজন";

    return errs;
  }

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      password: true,
      topic: true,
      message: true,
      agree: true,
    });

    if (!isValid) return;

    try {
      setSubmitting(true);
      // Fake API call
      await new Promise((res) => setTimeout(res, 900));
      console.log("Submitted data:", form);
      setSubmitted(true);
      // reset form
      setForm({
        name: "",
        email: "",
        password: "",
        topic: "",
        message: "",
        agree: false,
      });
      setTouched({});
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">যোগাযোগ ফর্ম</h1>
          <p className="text-gray-600">নিচের তথ্যগুলো পূরণ করে সাবমিট করুন</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-sm rounded-2xl p-6 space-y-5"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              নাম
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
                touched.name && errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="আপনার নাম"
            />
            {touched.name && errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              ইমেইল
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="you@example.com"
            />
            {touched.email && errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
                touched.password && errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="******"
            />
            <p className="text-xs text-gray-500 mt-1">কমপক্ষে ৬ অক্ষর</p>
            {touched.password && errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Topic */}
          <div>
            <label htmlFor="topic" className="block font-medium mb-1">
              বিষয়
            </label>
            <select
              id="topic"
              name="topic"
              value={form.topic}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
                touched.topic && errors.topic
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <option value="">বেছে নিন…</option>
              <option value="support">সাপোর্ট</option>
              <option value="sales">সেলস</option>
              <option value="feedback">ফিডব্যাক</option>
            </select>
            {touched.topic && errors.topic && (
              <p className="text-sm text-red-600 mt-1">{errors.topic}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              বার্তা
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 ${
                touched.message && errors.message
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="আপনার বার্তাটি লিখুন…"
              maxLength={maxMsg}
            />
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-gray-500">
                সর্বোচ্চ {maxMsg} অক্ষর
              </span>
              <span className="text-xs text-gray-500">
                {form.message.length}/{maxMsg}
              </span>
            </div>
            {touched.message && errors.message && (
              <p className="text-sm text-red-600 mt-1">{errors.message}</p>
            )}
          </div>

          {/* Agree */}
          <div className="flex items-start gap-2">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`mt-1 h-4 w-4 rounded border-gray-300 ${
                touched.agree && errors.agree ? "ring-2 ring-red-500" : ""
              }`}
            />
            <label
              htmlFor="agree"
              className="text-sm text-gray-700 select-none"
            >
              আমি শর্তাবলীতে সম্মত
            </label>
          </div>
          {touched.agree && errors.agree && (
            <p className="text-sm text-red-600 -mt-3">{errors.agree}</p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={submitting || !isValid}
              className={`px-4 py-2 rounded-xl text-white transition ${
                submitting || !isValid
                  ? "bg-indigo-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {submitting ? "Submitting…" : "Submit"}
            </button>

            <button
              type="button"
              onClick={() => {
                setForm({
                  name: "",
                  email: "",
                  password: "",
                  topic: "",
                  message: "",
                  agree: false,
                });
                setTouched({});
                setSubmitted(false);
              }}
              className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-50"
            >
              Reset
            </button>
          </div>

          {submitted && (
            <div className="p-3 rounded-xl bg-green-50 text-green-700 text-sm">
              ✅ ফর্ম সাবমিট হয়েছে! (ডেমো) — কনসোলে ডেটা দেখুন.
            </div>
          )}
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          ডেমো উদ্দেশ্যে তৈরি — প্রোডাকশনে API কলের সাথে সংযুক্ত করুন।
        </p>
      </div>
    </div>
  );
}
