import styles from './Footer.module.css';

export default function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
        <p>
            &copy; {anoAtual} Intituto Federal da Paraíba (IPFB).
            Todos os direitos resevardos.
            <br /> Desenvolvido para fins didàticos.
            por aluno Carlos miguel
        </p>
        </footer>
    )
}