import { ClerkProvider } from "@clerk/nextjs"

export default function withAuth(Component: any) {
    return function auth() {
        return (
            <ClerkProvider>
                {Component}
            </ClerkProvider>
        )
    }
}