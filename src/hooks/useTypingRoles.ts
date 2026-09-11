import { useEffect, useState } from "react";

export function useTypingRoles(roles: string[], typeSpeed = 70, holdMs = 1400, eraseSpeed = 35) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[i % roles.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === role) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? role.slice(0, prev.length - 1) : role.slice(0, prev.length + 1),
          );
        },
        deleting ? eraseSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, roles, typeSpeed, holdMs, eraseSpeed]);

  return text;
}
