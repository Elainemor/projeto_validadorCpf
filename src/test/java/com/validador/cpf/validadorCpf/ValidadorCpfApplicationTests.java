package com.validador.cpf.validadorCpf;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.validador.cpf.validadorCpf.models.Cliente;

@SpringBootTest
class ValidadorCpfApplicationTests {

	
	@Test
	@DisplayName("Dado que eu faça um teste com CPF válido")
	void fazendoTesteDeCpfValido() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("946.220.360-10");
		assertEquals(true, cliente.ValidarCPF());
	}
	@Test
	void fazendoTesteDeCpfInvalido() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("946.320.604-10");
		assertEquals(false, cliente.ValidarCPF());
	}

	@Test
	void fazendoTesteDeCpfComDigitoAMenos() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("946.220.60-10");
		assertEquals(false, cliente.ValidarCPF());
	}

	@Test
	void fazendoTesteDeCpfValidoComPontos() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("946.220.360-10");
		assertEquals(true, cliente.ValidarCPF());
	}

	@Test
	void fazendoTesteDeCpfInvalidoComPontos() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("926.220.360-10");
		assertEquals(false, cliente.ValidarCPF());
	}

	@Test
	void fazendoTesteDeCpfInvalidoComVirgula() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("946,220,360-10");
		assertEquals(false, cliente.ValidarCPF());
	}

	@Test
	void fazendoTesteDeCpfInvalidoComEspacoNoFinal() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("94622036010 ");
		assertEquals(true, cliente.ValidarCPF());
	}
	
	@Test
	void fazendoTesteDeCpfInvalidoComEspacoNoComeco() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf(" 94622036010");
		assertEquals(true, cliente.ValidarCPF());
	}
	
	@Test
	void fazendoTesteDeCpfInvalidoComEspacoNoMeio() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("946220 36010");
		assertEquals(true, cliente.ValidarCPF());
	}

		@Test
	void fazendoTesteDeCpfInvalidoComCPFMaluco() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("69b.969.790-88");
		assertEquals(false, cliente.ValidarCPF());
	}

		@Test
	void fazendoTesteDeCpfSemCPF() {
		Cliente cliente = new Cliente();
		cliente.setNome("Danilo");
		cliente.setCpf("");
		assertEquals(false, cliente.ValidarCPF());
	}


	

	
}