
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Lead = {
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  source: string | null;
  status: string | null;
  created_at: string;
};

export default function SupabaseTest() {
  const supabase = createClient();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Get leads from Supabase
  async function getLeads() {
    setLoading(true);

    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setMessage("❌ Error loading leads: " + error.message);
    } else {
      setLeads(data || []);
    }

    setLoading(false);
  }

  // Load leads when page opens
  useEffect(() => {
    getLeads();
  }, []);

  // Add a new lead
  async function addLead(e: React.FormEvent) {
    e.preventDefault();

    setAdding(true);
    setMessage("");

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        source: "test-form",
        status: "new",
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      setMessage("❌ Error: " + error.message);
    } else {
      setMessage("✅ Lead added successfully!");

      // Add the new lead to the top of the list
      setLeads((currentLeads) => [data, ...currentLeads]);

      // Clear the form
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
      });
    }

    setAdding(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1>Supabase Lead Test</h1>

        <p style={{ color: "#999" }}>
          Add a lead below and check your Supabase database.
        </p>

        {/* Add Lead Form */}
        <form
          onSubmit={addLead}
          style={{
            marginTop: "30px",
            padding: "25px",
            border: "1px solid #333",
            borderRadius: "12px",
            background: "#111",
          }}
        >
          <h2>Add New Lead</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Company"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              required
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            disabled={adding}
            style={{
              marginTop: "20px",
              padding: "12px 22px",
              borderRadius: "8px",
              border: "none",
              background: "#2563eb",
              color: "white",
              cursor: adding ? "not-allowed" : "pointer",
              fontSize: "16px",
              opacity: adding ? 0.6 : 1,
            }}
          >
            {adding ? "Adding..." : "Add Lead"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "15px",
                color: message.startsWith("✅")
                  ? "#4ade80"
                  : "#f87171",
              }}
            >
              {message}
            </p>
          )}
        </form>

        {/* Leads */}
        <section style={{ marginTop: "40px" }}>
          <h2>Leads in Supabase</h2>

          {loading ? (
            <p style={{ color: "#999" }}>Loading...</p>
          ) : leads.length === 0 ? (
            <p style={{ color: "#999" }}>No leads found.</p>
          ) : (
            <div style={{ marginTop: "20px" }}>
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  style={{
                    padding: "20px",
                    marginBottom: "12px",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    background: "#111",
                  }}
                >
                  <h3>{lead.name}</h3>

                  <p style={{ color: "#bbb" }}>
                    Company: {lead.company}
                  </p>

                  <p style={{ color: "#bbb" }}>
                    Email: {lead.email}
                  </p>

                  <p style={{ color: "#bbb" }}>
                    Phone: {lead.phone}
                  </p>

                  <p style={{ color: "#777", fontSize: "13px" }}>
                    Source: {lead.source} | Status: {lead.status}
                  </p>

                  <p
                    style={{
                      color: "#555",
                      fontSize: "12px",
                      marginTop: "8px",
                    }}
                  >
                    ID: {lead.id}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#050505",
  color: "white",
  fontSize: "15px",
  boxSizing: "border-box",
};

