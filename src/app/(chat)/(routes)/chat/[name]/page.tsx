import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import EncryptionMessage from "@/components/chat/EncryptionMessage";
import ChatNavbar from "@/components/chat/header/ChatNavbar";

type UserChatPageProps = {
  params: {
    name: string;
  };
};

export default function UserChatPage({ params: { name: id } }: UserChatPageProps) {

  return (
    <main className="bg-black h-[34rem] mb-4 w-full border border-[#525252] rounded-2xl ">
      <div className="h-[30.5rem] flex flex-col">
        <ChatNavbar name={id} />
        <div className="flex-1 overflow-y-scroll pb-52 pt-4 space-y-6 px-4 scrollbar-hide">
          <EncryptionMessage />
          <div className="space-y-2">
            <ChatMessage msg="hi" />
            <ChatMessage msg="how are" isUser />
            <ChatMessage msg="Iam Fine" />
            <ChatMessage image={"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"} isUser />
            <ChatMessage msg="Iam Fine" isUser={true} />
            <ChatMessage msg="Iam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn  nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfas" />
            <ChatMessage msg="Iam Finasdfasdfasdfasdfasdfasdfasfas  asdb asd sajhda dajhd adusn fusadf sdfjasd aasfasde" isUser={true} />
            <ChatMessage msg="Iam Fine lorem-ipsum Iam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfasIam sdbsa nasashd asdbhas dasjdn ajs dasjd ajsdh jasd jasd jasdioasd asi dhsaidh said ioa diad iad aidhsaidh sadsadas skafkslasbasnj m unsmmmefd cl fanaansn mjsmmesd ico ansaban icio nn nmarnnn ;opio yirunal eriyapole nam,irunnu poothopallil njn jnamm l eeriyanam poyathelle nee chirikkum cjunfilar cheelukl p Fineasdasd asdbasd sajhda dajhd adusn fsdsdsf sdf sd fsdf sd fsd fsdusadf sdfjasd asdfasdfas " isUser={true} />
            <ChatMessage msg="Iam Fine" isUser={true} />
            <ChatMessage isUser={true} msg="Iam Fine" />
            <ChatMessage msg="Iam Fine" />
            <ChatMessage msg="Iam Fine" />
            <ChatMessage msg="Iam Fine" isUser={true} />
          </div>
        </div>
      </div>
      <ChatInput chatId={id}/>
    </main>
  );
}
