import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

export default function Slide16() {
  const contacts = [
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'github.com/Nillocoelho',
      link: 'https://github.com/Nillocoelho'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: '/danillo-coelho-barbosa-85396b184',
      link: 'https://linkedin.com/in/danillo-coelho-barbosa-85396b184'
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'nillocoelho@gmail.com',
      link: 'mailto:nillocoelho@gmail.com'
    },
  ];

  return (
    <div className="h-full p-12 flex flex-col justify-center">
      {/* Title */}
      <div className="space-y-4 mb-12 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
          <span className="text-[#7DD3FC] font-mono tracking-wider">VAMOS CONECTAR</span>
          <div className="h-1 w-12 bg-[#7DD3FC]"></div>
        </div>
        
        <h2 className="text-6xl text-[#7DD3FC] font-mono tracking-tight">
          Contatos
        </h2>
        
        <div className="h-px max-w-2xl mx-auto bg-gradient-to-r from-transparent via-[#7DD3FC] to-transparent"></div>
      </div>
      
      {/* Contacts */}
      <div className="max-w-4xl mx-auto w-full space-y-5">
        {contacts.map((contact, index) => (
          <div 
            key={index}
            className="flex items-center gap-6 p-5 border-2 border-[#7DD3FC] rounded-lg hover:bg-[#7DD3FC]/5 transition-all group"
          >
            <div className="size-14 border-2 border-[#7DD3FC] rounded-lg flex items-center justify-center group-hover:bg-[#7DD3FC] transition-colors">
              <contact.icon className="size-7 text-[#7DD3FC] group-hover:text-black transition-colors" />
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-[#7DD3FC] font-mono mb-1">{contact.label}</p>
              <p className="text-lg text-white font-mono">{contact.value}</p>
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MessageSquare className="size-5 text-[#7DD3FC]" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Thank you message */}
      <div className="text-center mt-10">
        <div className="inline-block p-5 border-2 border-[#7DD3FC] rounded-lg bg-[#7DD3FC]/5">
          <p className="text-xl text-[#7DD3FC] font-mono">
            Obrigado pela atenção!
          </p>
        </div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-[#7DD3FC] opacity-30"></div>
      <div className="absolute top-4 right-4 w-24 h-24 border-r-2 border-t-2 border-[#7DD3FC] opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 border-l-2 border-b-2 border-[#7DD3FC] opacity-30"></div>
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#7DD3FC] opacity-30"></div>
    </div>
  );
}