"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2 } from "lucide-react";
import { sendGAEvent } from "@next/third-parties/google";

type FormState = {
  name: string;
  email: string;
  business: string;
  website: string;
  solution: string;
  otherSolution: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  business: "",
  website: "",
  solution: "",
  otherSolution: "",
  message: "",
};

export function DemoForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="surface-card p-6 sm:p-8">
      <div className="mb-6 space-y-3">
        <h2 className="text-2xl font-semibold text-foreground">Solicitar uma Demo Grátis</h2>
        <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">
          Preencha os detalhes abaixo e nós criaremos uma pré-visualização interativa personalizada adaptada ao seu restaurante.
        </p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center rounded-none border border-emerald-500/20 bg-emerald-500/10 p-10 text-center animate-in fade-in zoom-in duration-500">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-none bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-emerald-400">Solicitação de Demo Enviada!</h3>
          <p className="text-base leading-relaxed text-emerald-200/80">
            Recebemos o seu pedido. A nossa equipe analisará o seu negócio e preparará uma demonstração personalizada gratuita para você em breve.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="button-primary mt-8 border border-emerald-500/30 bg-emerald-500/20 px-6 py-2.5 text-sm text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300"
          >
            Solicitar Outra Demo
          </button>
        </div>
      ) : (
        <form
          className="grid gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            setIsSubmitting(true);
 
            try {
              const finalSolution = formState.solution === "Other" 
                ? `Other: ${formState.otherSolution}` 
                : formState.solution;
 
              // Combine additional information into the message to ensure EmailJS template delivers it
              const combinedMessage = `
Requested Solution: ${finalSolution}
Website: ${formState.website || "Not provided"}
Company: ${formState.business}
 
Use Case Details:
${formState.message}
              `.trim();
 
              await emailjs.send(
                "service_tnqdrdd", // Service ID
                "template_teb23hr", // Template ID
                {
                  from_name: formState.name,
                  reply_to: formState.email,
                  business: formState.business,
                  budget: "Demo Request", // use this to easily distinguish in standard template
                  timeline: finalSolution, // map solution of interest to timeline for display
                  message: combinedMessage,
                  to_email: "saad@mhstudios.online",
                },
                "C9krtPTiFCls0Vayb" // Public Key
              );
 
              setSubmitted(true);
              setFormState(initialState);
              sendGAEvent({ event: "submit_demo", form_name: "demo_form" });
            } catch (error) {
              console.error("Failed to send demo request:", error);
              alert("Something went wrong, please try again.");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Nome
              <input
                required
                minLength={2}
                name="name"
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, name: event.target.value }))
                }
                className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
                placeholder="Seu nome completo"
                disabled={isSubmitting}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Email Comercial
              <input
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, email: event.target.value }))
                }
                className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
                placeholder="voce@restaurante.com"
                disabled={isSubmitting}
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Nome do Restaurante / Marca
              <input
                required
                minLength={2}
                name="business"
                value={formState.business}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, business: event.target.value }))
                }
                className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
                placeholder="Nome do restaurante ou marca"
                disabled={isSubmitting}
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              URL do Site (Opcional)
              <input
                type="url"
                name="website"
                value={formState.website}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, website: event.target.value }))
                }
                className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
                placeholder="https://exemplo.com"
                disabled={isSubmitting}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Serviço de Interesse
            <select
              required
              name="solution"
              value={formState.solution}
              onChange={(event) =>
                setFormState((current) => ({ ...current, solution: event.target.value }))
              }
              className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground"
              disabled={isSubmitting}
            >
              <option value="">Selecione um serviço</option>
              <option value="Modern Restaurant Website">Site Moderno de Restaurante</option>
              <option value="Interactive Online Menu">Menu Online Interativo</option>
              <option value="Online Reservation Integration">Integração de Reserva Online</option>
              <option value="AI Restaurant Assistant">Assistente de IA para Restaurante</option>
              <option value="Gallery & Food Showcase">Galeria e Vitrine de Alimentos</option>
              <option value="Local SEO & Map Rankings">SEO Local e Classificação no Mapa</option>
              <option value="Website Maintenance & Support">Manutenção e Suporte de Sites</option>
              <option value="Other">Outro (Por favor, especifique)</option>
            </select>
          </label>

          {formState.solution === "Other" && (
            <label className="grid gap-2 text-sm font-medium text-foreground animate-in fade-in slide-in-from-top-1 duration-200">
              Por favor, especifique o serviço
              <input
                required
                minLength={2}
                name="otherSolution"
                value={formState.otherSolution}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, otherSolution: event.target.value }))
                }
                className="min-h-11 rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 text-foreground placeholder:text-foreground-muted"
                placeholder="Qual serviço você precisa?"
                disabled={isSubmitting}
              />
            </label>
          )}

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Requisitos / Foco
            <textarea
              required
              minLength={15}
              name="message"
              value={formState.message}
              onChange={(event) =>
                setFormState((current) => ({ ...current, message: event.target.value }))
              }
              rows={5}
              className="rounded-none border border-white/8 bg-[rgba(17,17,19,0.88)] px-4 py-3 text-foreground placeholder:text-foreground-muted"
              placeholder="Diga-nos o que você gostaria que a demo mostrasse (por exemplo, layout moderno, menu digital, widget de reserva personalizado, assistente de IA)."
              disabled={isSubmitting}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="button-primary mt-2 w-full px-6 text-sm sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando Solicitação..." : "Solicitar Demo Grátis"}
          </button>
        </form>
      )}
    </div>
  );
}
