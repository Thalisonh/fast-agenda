import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Users, Star, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="AgendaFácil Logo" width={32} height={32} />
            <span className="font-bold">AgendaFácil</span>
          </Link>
          <nav className="ml-auto flex gap-4">
            <Link href="#recursos" className="text-sm font-medium hover:underline underline-offset-4">
              Recursos
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:underline underline-offset-4">
              Depoimentos
            </Link>
            <Link href="#precos" className="text-sm font-medium hover:underline underline-offset-4">
              Preços
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplifique seu agendamento e aumente sua produtividade
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  AgendaFácil: a solução completa para prestadores de serviço gerenciarem agendamentos, clientes e pagamentos em um só lugar.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Comece Grátis</Button>
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Recursos que impulsionam seu negócio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <Calendar className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Agendamento Online</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Permita que seus clientes agendem serviços 24/7, reduzindo chamadas e aumentando a eficiência.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <Clock className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Lembretes Automáticos</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Reduza faltas com lembretes por SMS e e-mail, mantendo sua agenda otimizada.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6 space-y-4">
                  <Users className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Gestão de Clientes</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Centralize informações dos clientes e histórico de serviços para um atendimento personalizado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              O que nossos clientes dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image src="/placeholder.svg" alt="Avatar" width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-semibold">Maria Silva</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Cabeleireira</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "O AgendaFácil revolucionou meu salão. Reduzi as faltas em 50% e aumentei minha clientela."
                  </p>
                  <div className="flex mt-4">
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image src="/placeholder.svg" alt="Avatar" width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-semibold">João Santos</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Fisioterapeuta</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Gerenciar minha clínica ficou muito mais fácil. Economizo horas por semana em tarefas administrativas."
                  </p>
                  <div className="flex mt-4">
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image src="/placeholder.svg" alt="Avatar" width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-semibold">Ana Oliveira</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Dentista</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Os lembretes automáticos são um diferencial. Meus pacientes adoram e as faltas diminuíram drasticamente."
                  </p>
                  <div className="flex mt-4">
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                    <Star className="w-5 h-5 fill-current text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="precos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Planos que cabem no seu bolso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Básico</h3>
                  <p className="text-4xl font-bold mb-6">R$49<span className="text-sm font-normal">/mês</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Agendamento online
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Lembretes por e-mail
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Até 100 agendamentos/mês
                    </li>
                  </ul>
                  <Button className="w-full">Começar Agora</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardContent className="p-6">
                  <Badge className="mb-2">Mais Popular</Badge>
                  <h3 className="text-2xl font-bold mb-4">Profissional</h3>
                  <p className="text-4xl font-bold mb-6">R$99<span className="text-sm font-normal">/mês</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Tudo do plano Básico
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Lembretes por SMS
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Pagamentos online
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Agendamentos ilimitados
                    </li>
                  </ul>
                  <Button className="w-full">Escolher Profissional</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Empresarial</h3>
                  <p className="text-4xl font-bold mb-6">R$199<span className="text-sm font-normal">/mês</span></p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Tudo do plano Profissional
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Múltiplos profissionais
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Relatórios avançados
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      API para integrações
                    </li>
                  </ul>
                  <Button className="w-full">Contate Vendas</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para revolucionar seu negócio?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Junte-se a milhares de profissionais que já simplificaram sua rotina com o AgendaFácil.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Comece seu teste grátis</Button>
                <Button variant="outline" size="lg">
                  Agende uma demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg" alt="AgendaFácil Logo" width={32} height={32} />
            <span className="font-bold">AgendaFácil</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:underline">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Política de Privacidade
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" aria-label="Facebook">
              <Image src="/placeholder.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image src="/placeholder.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Image src="/placeholder.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}