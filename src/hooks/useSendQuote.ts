// hooks/usePresignedURL.tsx
"use client";
import { useMutation } from "@tanstack/react-query";
import { getSignedURL } from "@/lib/getSignedURL";
import { GetPresignedURL } from "@/schemas";

function useSendQuote() {
  return useMutation({
    mutationFn: (data: GetPresignedURL) => getSignedURL(data),
  });
}

export default useSendQuote;
