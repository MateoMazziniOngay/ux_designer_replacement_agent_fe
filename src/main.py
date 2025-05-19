"""Simple entry point for the project."""

try:
    import forge_tunnel
except ImportError:
    forge_tunnel = None


def main():
    if forge_tunnel is None:
        print("forge_tunnel not installed.\nInstall dependencies with `pip install -r requirements.txt`.")
    else:
        print("forge_tunnel available. Starting tunnel...")
        # Example usage placeholder
        # forge_tunnel.start()


if __name__ == "__main__":
    main()