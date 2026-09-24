import Message from "./Message";

export default function MessageList() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-8">
      <Message role="user">
        Help me design a modern landing page for a multi-model AI
        platform.
      </Message>

      <Message role="assistant">
        Absolutely. I would build the page around a simple promise:
        <br />
        <br />
        <b>One workspace for every AI model.</b>
        <br />
        <br />
        Start with a focused hero, show the product early, then explain
        model choice, workflows and pricing.
      </Message>

      <Message role="user">
        What sections should I prioritize?
      </Message>

      <Message role="assistant">
        Use this order:
        <br />
        <br />
        Hero → Product Preview → Features → Models → Pricing → FAQ →
        CTA.
        <br />
        <br />
        On mobile, keep navigation compact and make the primary action
        easy to reach.
      </Message>
    </div>
  );
}