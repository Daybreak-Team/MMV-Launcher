// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49730000)) {
            $InitializeCommonEvent(0, 90055000, 49735200, 1, 49732200, 49730201);
            $InitializeCommonEvent(0, 90055001, 49735200, 1, 49730201, 49730200);
        }
        if (EventFlag(49730001)) {
            $InitializeCommonEvent(0, 90055000, 49735200, 2, 49732200, 49730201);
            $InitializeCommonEvent(0, 90055001, 49735200, 2, 49730201, 49730200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49730200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49732200, 49730200);
    }
    $InitializeCommonEvent(0, 90065143, 49730200, 49730205, 49730800, 920200, 690047, 49735210, 49730800, 902500312, 49730810, 902500313, 49730820, 902500314);
    $InitializeCommonEvent(0, 90065911, 49730200, 49730800, 920200, 49735210, 49730800, 902500312, 49730810, 902500313, 49730820, 902500314, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49730800, 2, 0, 0, 1050, 920200, 902500312, 49730800);
    }
    $InitializeCommonEvent(0, 90015012, 49735210, 49730200);
    $InitializeCommonEvent(1, 90015012, 0, 49730200);
    $InitializeCommonEvent(0, 90015020, 49730200, 49730800);
    $InitializeCommonEvent(0, 90015008, 49730205, 49730800, 920200, 49735210, -1, 0.5);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065141, 49730800, 49730810, 49730820, 49730200, 49730800, 902500314, 49730206);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065142, 49730800, 49700810, 49730820, 49730200, 49730800, 902500314, 49730206, 49730207);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49732200, 49730800);
        $InitializeCommonEvent(0, 90015023, 49730200, 40, 0, 49735210, 49730800, 902500312, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015026, 49730206, 40, 0, 49735210, 49730810, 902500313);
        $InitializeCommonEvent(0, 90015026, 49730206, 40, 0, 49735210, 49730820, 902500314);
        $InitializeCommonEvent(0, 90015030, 49730200, 49735210, 40, 920200, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49730200, 49730800, 49735210, 1020, 920200, 110320, 902500312, 49730800);
        $InitializeCommonEvent(0, 90015470, 49732200, 49730200, 49730800, 49735210, 0, 0, 49735210);
        $InitializeCommonEvent(0, 90015478, 49730800, 49730800);
        $InitializeCommonEvent(0, 90015478, 49730810, 49730800);
        $InitializeCommonEvent(0, 90015478, 49730820, 49730800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49735210, 49730200, 49730800, 49732200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49732200, 49730800);
        $InitializeCommonEvent(0, 90015460, 49732200, 49730810);
        $InitializeCommonEvent(0, 90015460, 49732200, 49730820);
        $InitializeCommonEvent(0, 90015460, 49732200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49732200, 49730800);
        $InitializeCommonEvent(0, 90015475, 49732200, 49730810);
        $InitializeCommonEvent(0, 90015475, 49732200, 49730820);
        $InitializeCommonEvent(0, 90015475, 49732200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49730800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49730000, 49730300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49730000, 49730300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49730000, 49730300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49730000, 49730300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49730000, 49730300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49730000, 49730300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49730000, 49730301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49730000, 49730301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49730000, 49730301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49730000, 49730301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49730000, 49730301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49730000, 49730301);
    }
});

$Event(49732800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFor(HPRatio(chrEntityId3) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 902500520);
    DisplayBossHealthBar(Disabled, chrEntityId3, 1, 902500520);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId3);
});

$Event(49732810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5, chrEntityId2) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    ForceAnimationPlayback(48600800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    SetNetworkUpdateRate(48600800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    DisplayBossHealthBar(Enabled, chrEntityId2, 0, nameId);
});


